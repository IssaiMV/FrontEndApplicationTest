import { Injectable } from '@angular/core';

/**
 * Helper para guardar y obtener items desde localStorage
 */
@Injectable({
    providedIn: 'root',
})
export class AppStorage {

    constructor() { }

    /**
     * Obtiene un valor guardado en localStorage
     *
     * @param item string Valor a obtener desde localStorage
     */
    get(item: string) {
        // primero busca en sessionStorage
        let value = sessionStorage.getItem(item);
        if (value === null) {
            // si no existe en sessionStorage se busca en localStorage
            value = localStorage.getItem(item);
        }

        if (value !== null && (value.charAt(0) === '{' || value.charAt(0) === '[')) {
            return JSON.parse(value);
        }

        return value;
    }

    /**
     * Guarda un valor especificado en localStorage
     *
     * @param item string Idenficador
     * @param value any Valor a guardar, puede ser cualquier tipo de dato
     */
    set(item: string, value: any, toSessionStorage: boolean = true) {
        if (typeof value !== 'object') {
            this.setItem(
                item,
                value,
                toSessionStorage
            );
        } else {
            this.setItem(
                item,
                JSON.stringify(value),
                toSessionStorage
            );
        }
    }

    remove(item: string, fromSessionStorage: boolean = true) {
        if (fromSessionStorage) {
            sessionStorage.removeItem(item);
        } else {
            localStorage.removeItem(item);
        }
    }

    clear() {
        localStorage.clear();
        sessionStorage.clear();
    }

    private setItem(item: string, value: string, toSessionStorage: boolean) {
        if (toSessionStorage) {
            sessionStorage.setItem(item, value);
        } else {
            localStorage.setItem(item, value);
        }
    }
}
