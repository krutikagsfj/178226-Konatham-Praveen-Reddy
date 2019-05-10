import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { GameUserComponent } from './game-user/game-user.component';
const routes: Routes = [

  {
     path :'',component:GameUserComponent,pathMatch: 'full'},
    { path: 'game-list',component: GameListComponent},
    { path: 'game-user',component:GameUserComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }





// import { Routes, RouterModule } from '@angular/router';

// import { GameComponent } from './game/game.component';

// import { PlayComponent } from './play/play.component';



// const routes: Routes = [

// {path :'',component:GameComponent},

// { path: 'game', component: GameComponent },

// { path: 'play', component: PlayComponent }



// ];



// @NgModule({

//  imports: [RouterModule.forRoot(routes)],

//  exports: [RouterModule]

// })

// export class AppRoutingModule { }


