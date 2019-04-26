import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaService } from '../../services/lista.service';

enum StickyState {
  fixed =  "fixed",
  noFixed =  "no-fixed"
}

@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html'
})
export class ComparePage implements OnInit {

  private fixedState = StickyState.noFixed;
  private initialOffsetFromTop =  0;
  private fixedViewportOffset = 0;

  catSeleccionada: string;
  datosCategoria: any = [];

  constructor(public navCtrl: NavController,
              public listaService: ListaService,
              private element: ElementRef,
              private renderer:Renderer2 ) {

  }
  
  ngOnInit(){
    this.datosCategoria = ['vehiculos','electrodomesticos','electronica'];
  }

  // logScrolling(event: Event) {
  //   console.log('entro en scroll');
  //   console.log(event);
    
  //   let currentScroll = event.srcElement.children[0].scrollTop; // 

  //   //if not fixed
  //   //and we have not yet scrolled until the original position of the element
  //   //add the fixed class
  //   if(this.fixedState == StickyState.noFixed && currentScroll + this.fixedViewportOffset < this.initialOffsetFromTop){
  //       this.fixedState = StickyState.fixed;
  //       this.renderer.addClass(this.element.nativeElement, 'fixed');
  //   }
  //   //if fixed
  //   else if(this.fixedState == StickyState.fixed){
  //     let currentOffsetFromTop = currentScroll + this.element.nativeElement.getBoundingClientRect().top;
  //     //and the current offset from top is greater or equal than the original
  //    //remove the fixed class
  //     if (currentOffsetFromTop >= this.initialOffsetFromTop){
  //       this.fixedState = StickyState.noFixed;
  //       this.renderer.removeClass(this.element.nativeElement, 'fixed');
  //     }
  //   }
  // }

}
