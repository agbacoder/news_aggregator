import { TestBed, ComponentFixture} from '@angular/core/testing'
import { NotfoundComponent } from './notfound.component';

describe('Notfound Component', () => {
let fixture: ComponentFixture<NotfoundComponent> 
let component: NotfoundComponent;



    beforeEach( async () => {
       await TestBed.configureTestingModule({
            declarations: [NotfoundComponent], 
        }).compileComponents()
    })
    beforeEach(() => {
        fixture = TestBed.createComponent(NotfoundComponent)
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', ()=>{
            expect(component).toBeTruthy();
    });
      
     
});