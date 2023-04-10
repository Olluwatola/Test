
import express, {Application, Request, Response, NextFunction} from 'express';

const app: Application =express();

export const appExport = {
    app: app,
}