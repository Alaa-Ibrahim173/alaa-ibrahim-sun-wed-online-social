
import { registerSchema } from "./modules/auth/dto/register.dto";

const userData = {
  name: "Alaa Ibrahim",
  email: "alaa@example.com",
  password: "Alaa12345",
  confirmPassword: "Alaa12345",
  phone: "01012345678",
};

const result = registerSchema.safeParse(userData);

if (result.success) {
  console.log("Validation Success!");
  console.log(result.data);
} else {
  console.log("Validation Errors:");
  console.log(result.error.flatten());
}
