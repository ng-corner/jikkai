import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { EnvironmentService } from "@feature/environment/environment.service";

export const apiInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const environmentService = inject(EnvironmentService)

  const modifiedReq = req.clone({
    url: `${environmentService.getValue("apiUrl")}${req.url}`,
  })
  return next(modifiedReq)
}
