import { inject, Injectable, signal } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class ChosesService {
  choses = signal<string[]>([]);
  logger = inject(LoggerService);

  add(text: string) {
    this.choses.update((choses) => [...choses, text]);
  }

  remove(index: number) {
    this.choses.update((choses) => choses.filter((c, i) => i !== index));
    this.logger.log(this.choses());
  }
}
