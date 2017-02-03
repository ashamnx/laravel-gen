# Laravel API Generator

This is an experimental project built to help laravel developers generate the usual files (Model, Controller, Migration, etc...) with a UI. The Code is generated live, as you add model and fields. You can copy any files code at any moment. Hope you find this useful.
 
# Built With
[angular-cli](https://github.com/angular/angular-cli)
[ng2-redux](https://github.com/angular-redux/ng2-redux)
TypeScript

This is my first time using Angular (2+) and redux in a project so expect 'noob' code. :P However, i tried to follow most of the conventions and best practices. If there is anything i should improve, let me know. Thank you.

## Running Locally
Clone the project and do `npm install` to install all the dependencies.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How to use the generator
First when you Navigate to `http://localhost:4200/` you can see `Add Model` button in the left side nav. Click the button to create a new model.
When new model is created (named Post by default), you can simply change the name of your model and continue to other options. 
You can add other fields to your DB or Model with the `Add Field` Button. And Use the `Add Relation` Button to create relationships between models. 
Your code will be visible below and can be Downloaded or Copied at an time.

### Online Version
You can visit `https://laravel-gen.ashamnx.io` and use the generator.

### Things Planned
Im working to add new features such as the ability to generate ui components for the models in the future.

### Alternatives
There are other generators such as [laravel-generator](https://github.com/InfyOmLabs/laravel-generator) From InfyOm. It generates code directly in your laravel project unlike within browser.
