# International Telephone Input for Angular Material (NgxMatIntlTelInput)

An Angular Material package for entering and validating international telephone numbers. It adds a flag dropdown to any input, detects the user's country, displays a relevant placeholder and provides formatting/validation methods. Adapted for exanic to seperate country code selection from phone input.

**Supports:**

- Angular 15
- Angular Material 15
- ReactiveFormsModule
- FormsModule
- Validation with [libphonenumber-js](https://github.com/catamphetamine/libphonenumber-js)
- select search with [ngx-mat-select-search](https://www.npmjs.com/package/ngx-mat-select-search/v/7.0.7)

## Installation

### Install Dependencies

`$ npm install libphonenumber-js --save`
`$ npm install ngx-mat-select-search`

### Install This Library

`$ npm install ngx-mat-intl-tel-input --save`

## Usage

### Import

Add `NgxMatIntlTelInputComponent` to your component file:

```ts
imports: [NgxMatIntlTelInputComponent];
```

If close icon is not displayed correctly on ngx mat select search, try adding:

<link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"/>

to your `index.html`

## Example

Refer to main app in this repository for working example.

```html
<form #f="ngForm" [formGroup]="phoneForm">
  <ngx-mat-intl-tel-input [preferredCountries]="['us', 'gb']" [enablePlaceholder]="true" [enableSearch]="true" name="phone" describedBy="phoneInput" formControlName="phone"></ngx-mat-intl-tel-input>
</form>
```

```html

<form #f="ngForm" [formGroup]="phoneForm">
  <ngx-mat-intl-tel-input
  [enablePlaceholder]="true"
  [enableSearch]="true"
  name="phone"
  (countryChanged)="yourComponentMethodToTreatyCountryChangedEvent($event)" // $event is a instance of current select Country
  formControlName="phone"></ngx-mat-intl-tel-input>
</form>

```

If you want to show the sample number for the country selected or errors , use mat-hint and mat-error as

```html
<form #f="ngForm" [formGroup]="phoneForm">
  <ngx-mat-intl-tel-input [preferredCountries]="['us', 'gb']" [onlyCountries]="['us', 'gb', 'es']" [enablePlaceholder]="true" name="phone" formControlName="phone" #phone></ngx-mat-intl-tel-input>
  <mat-hint>e.g. {{phone.selectedCountry.placeHolder}}</mat-hint>
  <mat-error *ngIf="f.form.controls['phone']?.errors?.required">Required Field</mat-error>
  <mat-error *ngIf="f.form.controls['phone']?.errors?.validatePhoneNumber">Invalid Number</mat-error>
</form>
```

## Options

| Options           | Type       | Default     | Description                                                                         |
| ----------------- | ---------- | ----------- | ----------------------------------------------------------------------------------- |
| onlyCountries     | `string[]` | `[]`        | List of manually selected country abbreviations, which will appear in the dropdown. |
| inputPlaceholder  | `string`   | `undefined` | Placeholder for the input component.                                                |
| enablePlaceholder | `boolean`  | `true`      | Input placeholder text, which adapts to the country selected.                       |
| enableSearch      | `boolean`  | `false`     | Whether to display a search bar to help filter down the list of countries           |
| format            | `string`   | `default`   | Format of "as you type" input. Possible values: national, international, default    |
| describedBy       | `string`   | `undefined` | Use aria-described by with the input field                                          |
| searchPlaceholder | `string`   | `undefined` | Search label for country select search dropdown                                     |

## Library Contributions

- Fork repo.
- Go to `./projects/ngx-mat-intl-tel-input`
- Update `./src/lib` with new functionality.
- Update README.md
- Pull request.

### How to publish

- increase version number in: `projects/ngx-mat-intl-tel-input/package.json`
- Build lib and create package from root: `$ npm run package`
- Copy license and readme files from root: `$ npm run copy-files` (use git bash if cp error)
- cd into `dist/ngx-mat-intl-tel-input & run npm publish`

### Use locally

Running `npm run start` in root allows you to test changes made to the library.
