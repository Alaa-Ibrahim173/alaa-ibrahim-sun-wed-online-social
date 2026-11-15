
export class ServiceContainer {

    private services = new Map<string, unknown>();

    bind<T>(key: string, service: T): void {
        this.services.set(key, service);
    }

    resolve<T>(key: string): T {

        const service = this.services.get(key);

        if (!service) {
            throw new Error(`Service ${key} not found`);
        }

        return service as T;
    }
}

export const serviceContainer = new ServiceContainer();
