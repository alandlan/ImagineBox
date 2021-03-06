import { container } from "tsyringe";

import { CatalogueRepository } from "../../modules/repository/CatalogueRepository";
import { CategoryRepository } from "../../modules/repository/CategoryRepository";
import { ICatalogueRepository } from "../../modules/repository/interface/ICatalogueRepository";
import { ICategoryRepository } from "../../modules/repository/interface/ICategoryRepository";
import { IOrderItemRepository } from "../../modules/repository/interface/IOrderItemRepository";
import { IOrderRepository } from "../../modules/repository/interface/IOrderRepository";
import { IProductRepository } from "../../modules/repository/interface/IProductRepository";
import { IShopCartRepository } from "../../modules/repository/interface/IShopCartRepository";
import { IShopItemCartRepository } from "../../modules/repository/interface/IShopItemCartRepository";
import { IUserAddressRepository } from "../../modules/repository/interface/IUserAddressRepository";
import { IUserRepository } from "../../modules/repository/interface/IUserRepository";
import { IUserTokenRepository } from "../../modules/repository/interface/IUserTokenRepository";
import { OrderItemRepository } from "../../modules/repository/OrderItemRepository";
import { OrderRepository } from "../../modules/repository/OrderRepository";
import { ProductRepository } from "../../modules/repository/ProductRepository";
import { ShopCartRepository } from "../../modules/repository/ShopCartRepository";
import { ShopItemCartRepository } from "../../modules/repository/ShopItemCartRepository";
import { UserAddressRepository } from "../../modules/repository/UserAddressRepository";
import { UserRepository } from "../../modules/repository/UserRepository";
import { UserTokenRepository } from "../../modules/repository/UserTokenRepository";

import "../provider";

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<ICatalogueRepository>(
  "CatalogueRepository",
  CatalogueRepository
);

container.registerSingleton<IUserAddressRepository>(
  "UserAddressRepository",
  UserAddressRepository
);

container.registerSingleton<IUserTokenRepository>(
  "UserTokenRepository",
  UserTokenRepository
);

container.registerSingleton<IShopCartRepository>(
  "ShopCartRepository",
  ShopCartRepository
);

container.registerSingleton<IShopItemCartRepository>(
  "ShopItemCartRepository",
  ShopItemCartRepository
);

container.registerSingleton<IOrderRepository>(
  "OrderRepository",
  OrderRepository
);

container.registerSingleton<IOrderItemRepository>(
  "OrderItemRepository",
  OrderItemRepository
);
