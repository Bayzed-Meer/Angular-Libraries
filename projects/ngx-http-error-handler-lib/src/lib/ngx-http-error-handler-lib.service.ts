import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NgxHttpErrorHandlerLibrary implements ErrorHandler {
  constructor(private snackBar: MatSnackBar) {}

  handleError(error: any): void {
    let errorMessage = '';

    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 400:
          errorMessage = 'Bad Request. Please check your input.';
          break;
        case 401:
          errorMessage = 'Unauthorized. Please log in again.';
          break;
        case 403:
          errorMessage =
            'Forbidden. You do not have permission to perform this action.';
          break;
        case 404:
          errorMessage =
            'Not Found. The resource you are looking for does not exist.';
          break;
        case 415:
          errorMessage =
            'Unsupported Media Type. Please check the format of your request.';
          break;
        case 426:
          errorMessage = 'Upgrade Required. Please upgrade your client.';
          break;
        case 429:
          errorMessage = 'Too Many Requests. Please try again later.';
          break;
        case 431:
          errorMessage =
            'Request Header Fields Too Large. Please reduce the size of your request headers.';
          break;
        case 500:
          errorMessage = 'Internal Server Error. Please try again later.';
          break;
        case 502:
          errorMessage = 'Bad Gateway. Please try again later.';
          break;
        case 503:
          errorMessage = 'Service Unavailable.';
          break;
        case 504:
          errorMessage = 'Gateway Timeout. Please try again later.';
          break;
        default:
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    } else {
      errorMessage = error.message ? error.message : errorMessage;
    }

    this.snackBar.open(errorMessage, 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });

    console.log('Global Error handler:', errorMessage);
  }
}
