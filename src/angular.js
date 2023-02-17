// readonly form: FormGroup = new FormGroup({
//     title: new FormControl(),
//     price: new FormControl(),
//     description: new FormControl(),
//     image: new FormControl(),
//     category: new FormControl()
//    });
//
//
// onFormSubmitted(form: FormGroup):void {
//     this._productDwaService.create({
//         title: form.get('title')?.value,
//         price: form.get('price')?.value,
//         description: form.get('description')?.value,
//         image: form.get('image')?.value,
//         category: form.get('category')?.value,
//         }).subscribe()


// export class AgeComponent {
//     constructor(private _ageService: AgeService,
//     private _activatedRoute: ActivatedRoute) {
// }

// readonly ageDetails$: Observable<AgeModel> =
//     this._activatedRoute.params.pipe(
//         switchMap(data => this._ageService.getAll())
//     )
// }

// readonly productDetails$: Observable<DetailsProductModel> =
//     this._activatedRoute.params.pipe(
//         switchMap(data => this._detailProductService.getOne(
//             data['id']
//         ))
//     )



// <a routerLink="/employee-details/{{employee.personalNumber}}/{{ employee.name }}">
//     {{ employee.name }}
// </a>