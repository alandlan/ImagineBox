import { Request, Response } from "express";
import { container } from "tsyringe";

import { CatalogueService } from "../services/CatalogueService";

class CatalogueController {
  async Create(request: Request, response: Response): Promise<Response> {
    const { Name, Description } = request.body;

    const catalogueService = container.resolve(CatalogueService);

    const catalogue = await catalogueService.Create({ Name, Description });

    return response.status(201).json(catalogue);
  }

  async FindByName(request: Request, response: Response): Promise<Response> {
    const { Name } = request.query;

    const catalogueService = container.resolve(CatalogueService);

    const catalogue = await catalogueService.FindByName(Name as string);

    if (!catalogue)
      return response.status(404).json({ message: "Catalogo não encontrado!" });

    return response.status(200).json(catalogue);
  }

  async AddProducts(request: Request, response: Response): Promise<Response> {
    const { Id } = request.params;
    const { ProductIds } = request.body;

    const catalogueService = container.resolve(CatalogueService);

    const catalogues = await catalogueService.AddProducts({
      CatalogueId: Id,
      ProductIds,
    });

    return response.status(201).json(catalogues);
  }

  async RemoveProducts(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { Id } = request.params;
    const { ProductIds } = request.body;

    const catalogueService = container.resolve(CatalogueService);

    const catalogues = await catalogueService.RemoveProducts({
      CatalogueId: Id,
      ProductIds,
    });

    return response.status(201).json(catalogues);
  }

  async FindProducts(request: Request, response: Response): Promise<Response> {
    const { Id } = request.params;

    const catalogueService = container.resolve(CatalogueService);

    const catalogue = await catalogueService.FindProducts(Id);

    return response.status(200).json(catalogue);
  }
}

export { CatalogueController };
