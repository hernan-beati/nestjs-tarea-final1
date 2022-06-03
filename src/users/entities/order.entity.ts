import { User } from './user.entity';
// como las entidades solo son clases, las importo de otro módulo y listo
// no van inyectadas en un módulo como controllers, services, otros módulos, etc.
import { Product } from './../../products/entities/product.entity';

export class Order {
  date: Date;
  user: User;
  products: Product[];
}
