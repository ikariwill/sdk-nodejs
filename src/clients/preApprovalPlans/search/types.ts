import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { PreApprovalPlanResponse } from '../commonTypes';

export declare type Search = {
  filters?: PreApprovalPlanSearchOptions,
  config: MercadoPagoConfig
};

export declare type PreApprovalPlanSearchOptions = {
  status?: string;
  q?: string;
  sort?: string;
  criteria?: string;
  offset?: string;
  limit?: string;
};

export declare type PreApprovalPlanSearchResponse = {
  paging: PreApprovalPlanSearchPaging;
  results: Array<PreApprovalPlanResponse>;
};

export declare type PreApprovalPlanSearchPaging = {
  total: number;
  limit: number;
  offset: number;
};


