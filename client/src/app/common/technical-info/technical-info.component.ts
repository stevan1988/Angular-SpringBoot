import {Component, OnInit, Input} from '@angular/core';
import { PrettyJsonPipe } from '../pretty-json/prettyJson.pipe';

import { HighlightJsService } from 'angular2-highlight-js';
import ResponseInfo from './ResponseInfo';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-technical-info',
  templateUrl: './technical-info.component.html',
  styleUrls: ['./technical-info.component.css'],
  providers: [PrettyJsonPipe]
})
export class TechnicalInfoComponent implements OnInit {

   _code: string;
   _response: any;
   _request: any;
   _responseInfo: ResponseInfo;

  public alerts: any = [];

  isValid: boolean = undefined;

  constructor(private hService: HighlightJsService, private prettyJson: PrettyJsonPipe) {
  }

  ngOnInit() {
  }

  @Input()
   set response(response: any) {
       this._response = this.formatToJson(response);
       this.doOnResponse();
   }

  @Input()
  set responseInfo(responseInfo: ResponseInfo) {
    if (!responseInfo) {
      return;
    }
    this._responseInfo = responseInfo;
    this._response = this.formatToJson(responseInfo.text);
    this.isValid = !responseInfo.error;
    this.doOnResponse();
  }


   @Input()
   set request(request: any) {
    this._request = this.formatToJson(request);
  }

  @Input()
  set code(code: string) {
    this._code = code;
  }

  get response(): any { return this._response; }

  get request(): any { return this._request; }

  formatToJson(json: any): string {
    return  `<pre><code class="json highlight">` +
            this.prettyJson.transform(json) + `</code></pre>`;
  }

  get code(): string { return this._code}


   doOnResponse(): void {
       this.showAlert();
  }

  showAlert() {
    if (isNullOrUndefined(this._responseInfo)) {
      return;
    }
    if (this.isValid) {
      this.alerts.push({
        type: 'success',
        msg: `The request is valid (added: ${(new Date()).toLocaleTimeString()})`,
        timeout: 20000
      });
    } else {
      this.alerts.push({
        type: 'danger',
        msg: `The request is NOT Valid (added: ${(new Date()).toLocaleTimeString()})`,
        timeout: 20000
      });
    }
  }
}
