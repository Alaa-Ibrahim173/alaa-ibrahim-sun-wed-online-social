
import { serviceContainer } from "./service-container";
import { TestService } from "./test.service";

export const bindServices = (): void => {
    serviceContainer.bind(
        "TestService",
        new TestService()
    );
};
