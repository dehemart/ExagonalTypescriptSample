import { AboutInterface } from '../ports/inbound/about_use_case_interface';

export class AboutUsecase implements AboutInterface {
  getTextAbout(): string {
    return 'This is an about text to application!';
  }

}
