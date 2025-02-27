import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FileuploadService } from './fileupload.service';
import { Moment } from 'moment';
// import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormElementsService, Month, Person } from '../form-elements/form-elements.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form-advanced',
  templateUrl: './form-advanced.component.html',
  styleUrls: ['./form-advanced.component.scss'],
})
export class FormAdvancedComponent implements OnInit {
  public color: string = '#2889e9';
	public color1: string = '#e920e9';

	dropdownList: any= [];
	dropdownList2: any[] = [];

	singleItem = [];
	SingleSettings = {};

	MultiseletDropDown:any = [];
	multipleItems:any = [];
	multipleSettings = {};

	disableItems = [];
	disableSettings = {};

	itemList: any[] = [];
	itemSelect = [];
	itemSettings = {};

	model!: NgbDateStruct;
	selected!: { startDate: Moment, endDate: Moment };
disabled = false;
	filter = false;
	// format: any = DualListComponent.DEFAULT_FORMAT;
	keepSorted = true;
	key!: any;
	display: any;
	source!: Array<any>;
	confirmed!: Array<any>;

	private sourceCourses!: Array<any>;

	private confirmedCourses!: Array<any>;

	arrayType = [
		{ name: 'Courses', detail: '(object array)', value: 'Courses' },
	];

	type = this.arrayType[0].value;

	private Courses: Array<any> = [
		{ key: 1, value:'javascript'},
		{ key: 2, value:'Java'},
		{ key: 3, value:'Python'},
		{ key: 4, value:'Typrscript'},
		{ key: 5, value:'PHP'},
		{ key: 6, value:'Ruby'},
		{ key: 7, value:'JQuery'},
		{ key: 8, value:'AngularJS'},
		{ key: 9, value:'ReactJS'},
		{ key: 10, value:'VueJS'}
	];
private coursesLabel(item: any) {
		return item.value;
	}

	private useCourses() {
		this.key = 'key';
		this.display = this.coursesLabel;
		this.keepSorted = true;
		this.source = this.sourceCourses;
		this.confirmed = this.confirmedCourses;
	}

	swapSource() {
		switch (this.type) {
		case this.arrayType[0].value:
			this.useCourses();
			break;
		}
	}

	doReset() {
		this.sourceCourses = JSON.parse(JSON.stringify(this.Courses));
		this.confirmedCourses = new Array<any>();

		// Preconfirm some items.
		this.confirmedCourses.push( this.Courses[31] );

		switch (this.type) {
		case this.arrayType[0].value:
			this.useCourses();
			break;
		}
	}
separateDialCode = false;
	// SearchCountryField = SearchCountryField;
	// CountryISO = CountryISO;
	// PhoneNumberFormat = PhoneNumberFormat;
	// preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries() {
		// this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

	constructor() {  }

	ngOnInit(): void {

		this.doReset();

		this.disableSettings = {
			text: "Disable",
			disabled: true,
		};
		this.SingleSettings = {
			singleSelection: true,
			text: "Select Single Month",
			classes: "myclass custom-class"
		};
		this.dropdownList = [
			{ "id": 1, "itemName": "January" },
			{ "id": 2, "itemName": "February" },
			{ "id": 3, "itemName": "March" },
			{ "id": 4, "itemName": "April" },
			{ "id": 5, "itemName": "May" },
			{ "id": 6, "itemName": "June" },
			{ "id": 7, "itemName": "July" },
			{ "id": 8, "itemName": "August" },
			{ "id": 9, "itemName": "September" },
			{ "id": 10, "itemName": "October" },
			{ "id": 11, "itemName": "November" },
			{ "id": 12, "itemName": "December" },
		];
		this.MultiseletDropDown = [
			{"id":1,"itemName":"India"},
			{"id":2,"itemName":"Singapore"},
			{"id":3,"itemName":"Australia"},
			{"id":4,"itemName":"Canada"},
			{"id":5,"itemName":"South Korea"},
			{"id":6,"itemName":"Germany"},
			{"id":7,"itemName":"France"},
			{"id":8,"itemName":"Russia"},
			{"id":9,"itemName":"Italy"},
			{"id":10,"itemName":"Sweden"}
		];
this.multipleSettings = { 
				singleSelection: false, 
				text:"Select Countries",
				selectAllText:'Select All',
				unSelectAllText:'UnSelect All',
				classes:"myclass custom-class",
			};

		this.itemList = [
			{ "id": 1, "itemName": "India", "category": "asia" },
			{ "id": 2, "itemName": "Singapore", "category": "asia pacific" },
			{ "id": 3, "itemName": "Germany", "category": "Europe" },
			{ "id": 4, "itemName": "France", "category": "Europe" },
			{ "id": 5, "itemName": "South Korea", "category": "asia" },
			{ "id": 6, "itemName": "Sweden", "category": "Europe" },
		];
		this.itemSettings = {
			singleSelection: false,
			text: 'Select Group',
			selectAllText: 'Select All',
			unSelectAllText: 'UnSelect All',
			searchPlaceholderText: 'Search Group',
			enableSearchFilter: true,
			badgeShowLimit: 5,
			groupBy: 'category',
		};
	}

	select = ['Firefox'];

	selectValues = [
		{ value: 1, label: 'Firefox' },
		{ value: 2, label: 'Chrome' },
		{ value: 3, label: 'Safari' },
		{ value: 4, label: 'Opera' },
		{ value: 5, label: 'Internet Explorer' },
	];

	select2Countries = [
		{
			id: 'group1',
			title: 'Mountain Time Zone',
			countryNames: [
				{ id: "1", title: 'Arizona' },
				{ id: "2", title: 'Colorado' },
				{ id: "3", title: 'Idaho' },
				{ id: "4", title: 'Montana' },
				{ id: "5", title: 'Nebraska' },
				{ id: "6", title: 'New Mexico' },
				{ id: "7", title: 'North Dakota' },
				{ id: "8", title: 'Utah' },
				{ id: "9", title: 'Wyoming' },
			]
		},
		{
			id: "group2",
			title: 'Central Time Zone',
			countryNames: [
				{ id: "1", title: 'Alabama' },
				{ id: "2", title: 'Arkansas' },
				{ id: "3", title: 'Illinois' },
				{ id: "4", title: 'Iowa' },
				{ id: "5", title: 'Kansas' },
				{ id: "6", title: 'Kentucky' },
				{ id: "7", title: 'Louisiana' },
				{ id: "8", title: 'Minnesota' },
				{ id: "9", title: 'Mississippi' },
				{ id: "10", title: 'Missouri' },
				{ id: "11", title: 'Oklahoma' },
				{ id: "12", title: 'South Dakota' },
				{ id: "13", title: 'Texas' },
				{ id: "14", title: 'Tennessee' },
				{ id: "15", title: 'Wisconsin' },
			]
		}
	];

// dropzone
  files: File[] = [];
  filesPreview: File[] = [];
  filesDisabled: File[] = [];
  disable: boolean = true;

  onSelect(event: any) {
    // console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onPreviewFileSelect(event: any) {
    // console.log(event);
    this.filesPreview.push(...event.addedFiles);
  }

  onPreviewFileRemove(event: any) {
    // console.log(event);
    this.filesPreview.splice(this.filesPreview.indexOf(event), 1);
  }
  
  hasError(error: string) {
	console.log(error);
  }
  getNumber = (error: string) => {
	console.log(error);
  };
  telInputObject(error: string) {
	console.log(error);
  }
  onCountryChange(error: string) {
	console.log(error);
  }
  onSubmit(){
	
  }
  selectedCars = ['select cars'];
cars = [
  { id: 1, name: 'Volvo' },
  { id: 2, name: 'Saab' },
  { id: 3, name: 'Opel' },
  { id: 4, name: 'Audi' },
];
cities = [
	{
	  id: 1,
	  name: 'Vilnius',
	  avatar:
		'//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x',
	},
	{
	  id: 2,
	  name: 'Kaunas',
	  avatar:
		'//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15',
	},
	{
	  id: 3,
	  name: 'Pavilnys',
	  avatar:
		'//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15',
	},
	{
	  id: 4,
	  name: 'Siauliai',
	  avatar:
		'//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x',
	},
  ];
  selectedCity = this.cities[1].name;
  toppings = new FormControl('select all');
toppingList: string[] = [
  'Extra cheese',
  'Mushroom',
  'Onion',
  'Pepperoni',
  'Sausage',
  'Tomato',
];
selectedProjects = [];
projects = [
  {
    id: 'p1',
    title: 'Project A',
    subprojects: [
      { title: 'Subproject 1 of A', id: 's1p1' },
      { title: 'Subproject 2 of A', id: 's2p1' },
    ],
  },
  {
    id: 'p2',
    title: 'Project B',
    subprojects: [
      { title: 'Subproject 1 of B', id: 's1p2' },
      { title: 'Subproject 2 of B', id: 's2p2' },
    ],
  },
];
//Selectable groups
selectedAccount = [{ country: 'Colombia' }];
accounts = [
  {
    name: 'Jill',
    email: 'jill@email.com',
    age: 15,
    country: undefined,
    child: { state: 'Active' },
  },
  {
    name: 'Henry',
    email: 'henry@email.com',
    age: 10,
    country: undefined,
    child: { state: 'Active' },
  },
  {
    name: 'Meg',
    email: 'meg@email.com',
    age: 7,
    country: null,
    child: { state: 'Active' },
  },
  {
    name: 'Adam',
    email: 'adam@email.com',
    age: 12,
    country: 'United States',
    child: { state: 'Active' },
  },
  {
    name: 'Homer',
    email: 'homer@email.com',
    age: 47,
    country: '',
    child: { state: 'Active' },
  },
  {
    name: 'Samantha',
    email: 'samantha@email.com',
    age: 30,
    country: 'United States',
    child: { state: 'Active' },
  },
  {
    name: 'Amalie',
    email: 'amalie@email.com',
    age: 12,
    country: 'Argentina',
    child: { state: 'Active' },
  },
  {
    name: 'Estefanía',
    email: 'estefania@email.com',
    age: 21,
    country: 'Argentina',
    child: { state: 'Active' },
  },
  {
    name: 'Adrian',
    email: 'adrian@email.com',
    age: 21,
    country: 'Ecuador',
    child: { state: 'Active' },
  },
  {
    name: 'Wladimir',
    email: 'wladimir@email.com',
    age: 30,
    country: 'Ecuador',
    child: { state: 'Inactive' },
  },
  {
    name: 'Natasha',
    email: 'natasha@email.com',
    age: 54,
    country: 'Ecuador',
    child: { state: 'Inactive' },
    disabled: true,
  },
  {
    name: 'Nicole',
    email: 'nicole@email.com',
    age: 43,
    country: 'Colombia',
    child: { state: 'Inactive' },
  },
  {
    name: 'Michael',
    email: 'michael@email.com',
    age: 15,
    country: 'Colombia',
    child: { state: 'Inactive' },
  },
  {
    name: 'Nicolás',
    email: 'nicole@email.com',
    age: 43,
    country: 'Colombia',
    child: { state: 'Inactive' },
  },
];
compareAccounts = (item: any, selected: any) => {
	if (selected.country && item.country) {
	  return item.country === selected.country;
	}
	if (item.name && selected.name) {
	  return item.name === selected.name;
	}
	return false;
  };
}

