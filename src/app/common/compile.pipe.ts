import {Pipe, PipeTransform} from '@angular/core';
const pluralize = require('pluralize');

@Pipe({
name: 'compile'
})
export class CompilePipe implements PipeTransform {

    private createModel(model) {
        return `
<?php

namespace App\\Models;

use Eloquent as Model;
${ model.softDelete ? 'use Illuminate\\Database\\Eloquent\\SoftDeletes;' : '' }

/**
 * Class ${ model.name }
 * @package App\\Models
 */
class ${ model.name } extends Model
{
    ${ model.softDelete ? 'use SoftDeletes;':'' }

    public $table = '${ pluralize(model.name.toLowerCase()) }';

    protected $dates = [
        ${ model.softDelete? '\'deleted_at\',':'' }
    ]

    public $fillable = [
        ${ model.fields.filter(item => {
            return item.fillable;
        }).map(item => {
            return `'${ item.name }'`;
        }) }
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [

    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        ${ model.fields.map(field => {
            return `'${ field.name }' => '${ field.validations }',`;
        }) }
    ];

}
`;
    }

    private createMigration(model) {
        return `
<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;

class Create${ pluralize(model.name) }Table extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('${ pluralize(model.name.toLowerCase())}', function (Blueprint $table) {
            $table->increments('id');
            ${ model.fields.map(field => {
            return `$table->${ field.db_type }('${field.name}')`;
        }) }
            
            ${ model.polymorphic ? `$table->morphs('${model.name.toLowerCase()}able');` : ''}
            ${ model.polymorphic ? `$table->timestamps();` : ''}
            ${ model.polymorphic ? `$table->softDeletes();` : ''}
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('${ pluralize(model.name.toLowerCase()) }');
    }

}
`;
    }

    private createController(model) {
        return `
<?php

namespace App\\Http\\Controllers\\API;

use App\\Http\\Requests\\API\\Create${ model.name }APIRequest;
use App\\Http\\Requests\\API\\Update${ model.name }APIRequest;
use App\\Models\\${ model.name };
use App\\Repositories\\${ model.name }Repository;
use Illuminate\\Http\\Request;
use App\\Http\\Controllers\\AppBaseController;
use InfyOm\\Generator\\Criteria\\LimitOffsetCriteria;
use Prettus\\Repository\\Criteria\\RequestCriteria;
use Response;

/**
 * Class ${ model.name }Controller
 * @package App\\Http\\Controllers\\API
 */

class ${ model.name }APIController extends AppBaseController
{
    /** @var  ${ model.name }Repository */
    private \$${ model.name.toLowerCase() }Repository;

    public function __construct(${ model.name }Repository \$${ model.name.toLowerCase() }Repo)
    {
        $this->${ model.name.toLowerCase() }}Repository = \$${ model.name.toLowerCase() }Repo;
    }

    /**
     * Display a listing of the ${ model.name }.
     * GET|HEAD /${ pluralize(model.name.toLowerCase()) }
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->${ model.name.toLowerCase() }Repository->pushCriteria(new RequestCriteria($request));
        $this->${ model.name.toLowerCase() }Repository->pushCriteria(new LimitOffsetCriteria($request));
        \$${ pluralize(model.name.toLowerCase()) } = $this->${ model.name.toLowerCase() }Repository->all();

        return $this->sendResponse(\$${ pluralize(model.name.toLowerCase()) }->toArray(), '${ pluralize(model.name) } retrieved successfully');
    }

    /**
     * Store a newly created ${ model.name } in storage.
     * POST /${ pluralize(model.name.toLowerCase()) }
     *
     * @param Create${ model.name }APIRequest $request
     *
     * @return Response
     */
    public function store(Create${ model.name }APIRequest $request)
    {
        $input = $request->all();

        \$${ pluralize(model.name.toLowerCase()) } = $this->${ model.name.toLowerCase() }Repository->create($input);

        return $this->sendResponse(${ pluralize(model.name.toLowerCase()) }->toArray(), '${ model.name } saved successfully');
    }

    /**
     * Display the specified ${ model.name }.
     * GET|HEAD /${ pluralize(model.name.toLowerCase()) }/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var ${ model.name } \$${ model.name.toLowerCase() } */
        \$${ model.name.toLowerCase() } = $this->${ model.name.toLowerCase() }Repository->findWithoutFail($id);

        if (empty(\$${ model.name.toLowerCase() }})) {
            return $this->sendError('${ model.name } not found');
        }

        return $this->sendResponse(\$${ model.name.toLowerCase() }->toArray(), '${ model.name } retrieved successfully');
    }

    /**
     * Update the specified ${ model.name } in storage.
     * PUT/PATCH /${ pluralize(model.name.toLowerCase()) }/{id}
     *
     * @param  int $id
     * @param Update${ model.name }APIRequest $request
     *
     * @return Response
     */
    public function update($id, Update${ model.name }APIRequest $request)
    {
        $input = $request->all();

        /** @var ${ model.name } \$${ model.name.toLowerCase() } */
        \$${ model.name.toLowerCase() } = $this->${ model.name.toLowerCase() }Repository->findWithoutFail($id);

        if (empty(\$${ model.name.toLowerCase() }})) {
            return $this->sendError('${ model.name } not found');
        }

        \$${ model.name.toLowerCase() }} = $this->${ model.name.toLowerCase() }Repository->update($input, $id);

        return $this->sendResponse(\$${ model.name.toLowerCase() }->toArray(), '${ model.name } updated successfully');
    }

    /**
     * Remove the specified ${ model.name } from storage.
     * DELETE /${ pluralize(model.name.toLowerCase()) }/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var ${ model.name } \$${ model.name.toLowerCase() } */
        \$${ model.name.toLowerCase() } = $this->${ model.name.toLowerCase() }Repository->findWithoutFail($id);

        if (empty(\$${ model.name.toLowerCase() })) {
            return $this->sendError('${ model.name } not found');
        }

        \$${ model.name.toLowerCase() }->delete();

        return $this->sendResponse($id, '${ model.name } deleted successfully');
    }
}`;
    }

    private createCreateRequest(model) {
        return `
<?php

namespace App\\Http\\Requests\\API;

use App\\Models\\${ model.name };
use InfyOm\\Generator\\Request\\APIRequest;

class Create${ model.name }APIRequest extends APIRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return ${ model.name }::$rules;
    }
}
`;
    }

    private createUpdateRequest(model) {
        return `
<?php

namespace App\\Http\\Requests\\API;

use App\\Models\\${ model.name };
use InfyOm\\Generator\\Request\\APIRequest;

class Update${ model.name }APIRequest extends APIRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return ${ model.name }::$rules;
    }
}
`;
    }

    private createRepository(model) {
        return `
<?php

namespace App\Repositories;

use App\\Models\\${ model.name };
use InfyOm\\Generator\\Common\\BaseRepository;

class ${ model.name }Repository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [

    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return ${ model.name }::class;
    }
}
`;
    }

    private process(type, model) {
        switch (type) {
            case 'model':
                return this.createModel(model);
            case 'migration':
                return this.createMigration(model);
            case 'controller':
                return this.createController(model);
            case 'createRequest':
                return this.createCreateRequest(model);
            case 'updateRequest':
                return this.createUpdateRequest(model);
            case 'repository':
                return this.createRepository(model);



            default:
                return 'No template found';
        }

    }

    transform(value: any, args?: any): any {
        return this.process(args, value);
    }

}
