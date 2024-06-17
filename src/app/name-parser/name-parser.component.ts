import { Component } from '@angular/core';
import { NameParserService } from '../name-parser.service';
import { ParsedString } from '../parsed-string.model';

@Component({
  selector: 'app-name-parser',
  templateUrl: './name-parser.component.html',
  styleUrls: ['./name-parser.component.css']
})
export class NameParserComponent {
  fullName: string = '';
  parsedName: ParsedString | null = null;
  error: string | null = null;

  constructor(private nameParserService: NameParserService) {}

  onSubmit() {
    this.nameParserService.parseName(this.fullName).subscribe(
      (data: ParsedString) => {
        this.parsedName = data;
        this.error = null;
      },
      (err) => {
        this.parsedName = null;
        this.error = err;
      }
    );
  }
}
