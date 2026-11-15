
import { serviceContainer } from "../../common/services/service-container";
import { TestService } from "../../common/services/test.service";

export const testController = (req: any, res: any) => {

    const testService =
        serviceContainer.resolve<TestService>("TestService");

    const message = testService.sayHello();

    res.json({
        message
    });
};
