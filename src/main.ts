import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { SourceComponent } from './app/source/source.component';
import { SinkComponent } from './app/sink/sink.component';


bootstrapApplication(SourceComponent, {
  providers: [provideRouter(routes)]
}).catch((err: any) => console.error(err));
