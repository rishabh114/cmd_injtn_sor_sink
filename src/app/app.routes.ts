import { Routes } from '@angular/router';
import { SourceComponent } from './source/source.component';
import { SinkComponent } from './sink/sink.component';

export const routes: Routes = [
  { path: 'source', component: SourceComponent },
  { path: 'sink', component: SinkComponent },
  { path: '', redirectTo: '/source', pathMatch: 'full' }
];
