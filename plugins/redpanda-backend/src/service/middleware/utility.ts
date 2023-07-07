

export function checkRequired(req:any, res: any, next: any) {
    req.uid = 145;
    next();
}
