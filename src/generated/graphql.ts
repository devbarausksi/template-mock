import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/**  An Address  */
export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  neighborhood?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street: Scalars['String']['output'];
  zipCode?: Maybe<Scalars['String']['output']>;
};

/**  A input to persist an Address of Customer  */
export type AddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  streetName: Scalars['String']['input'];
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/**  A Currency  */
export type Currency = {
  __typename?: 'Currency';
  code: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

/**  A input to persist a Currency  */
export type CurrencyInput = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/**  A Customer  */
export type Customer = {
  __typename?: 'Customer';
  addresses: Array<Maybe<Address>>;
  createdAt: Scalars['String']['output'];
  document: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

/**  A input to persist a Customer  */
export type CustomerInput = {
  address: AddressInput;
  document: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']['output']>;
  deleteCurrency?: Maybe<Scalars['Boolean']['output']>;
  deletePaymentForm?: Maybe<Scalars['Boolean']['output']>;
  deletePaymentMethod?: Maybe<Scalars['Boolean']['output']>;
  saveCurrency: Currency;
  saveCustomer: Customer;
  savePaymentForm: PaymentForm;
  savePaymentMethod: PaymentMethod;
  updateCurrency: Currency;
  updatePaymentForm: PaymentForm;
  updatePaymentMethod: PaymentMethod;
};


export type MutationDeleteCurrencyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentFormArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentMethodArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSaveCurrencyArgs = {
  input: CurrencyInput;
};


export type MutationSaveCustomerArgs = {
  input: CustomerInput;
};


export type MutationSavePaymentFormArgs = {
  input: PaymentFormInput;
};


export type MutationSavePaymentMethodArgs = {
  input: PaymentMethodInput;
};


export type MutationUpdateCurrencyArgs = {
  id: Scalars['ID']['input'];
  input: CurrencyInput;
};


export type MutationUpdatePaymentFormArgs = {
  id: Scalars['ID']['input'];
  input: PaymentFormInput;
};


export type MutationUpdatePaymentMethodArgs = {
  id: Scalars['ID']['input'];
  input: PaymentMethodInput;
};

/**  A PaymentForm  */
export type PaymentForm = {
  __typename?: 'PaymentForm';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

/**  A input to persist a Payment Form  */
export type PaymentFormInput = {
  name: Scalars['String']['input'];
};

/**  A PaymentMethod  */
export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  paymentTerm: Array<Maybe<Scalars['Int']['output']>>;
  updatedAt: Scalars['String']['output'];
};

/**  A input to persist a Payment Method  */
export type PaymentMethodInput = {
  name: Scalars['String']['input'];
  paymentTerm: Array<InputMaybe<Scalars['Int']['input']>>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']['output']>;
  currencies: Array<Maybe<Currency>>;
  currencyById: Currency;
  customerById: Customer;
  customers: Array<Maybe<Customer>>;
  paymentFormById: PaymentForm;
  paymentForms: Array<Maybe<PaymentForm>>;
  paymentMethodById: PaymentMethod;
  paymentMethods: Array<Maybe<PaymentMethod>>;
};


export type QueryCurrenciesArgs = {
  direction?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCurrencyByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomersArgs = {
  direction?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPaymentFormByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentFormsArgs = {
  direction?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPaymentMethodByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentMethodsArgs = {
  direction?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  AddressInput: AddressInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Currency: ResolverTypeWrapper<Currency>;
  CurrencyInput: CurrencyInput;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerInput: CustomerInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PaymentForm: ResolverTypeWrapper<PaymentForm>;
  PaymentFormInput: PaymentFormInput;
  PaymentMethod: ResolverTypeWrapper<PaymentMethod>;
  PaymentMethodInput: PaymentMethodInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  AddressInput: AddressInput;
  Boolean: Scalars['Boolean']['output'];
  Currency: Currency;
  CurrencyInput: CurrencyInput;
  Customer: Customer;
  CustomerInput: CustomerInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  PaymentForm: PaymentForm;
  PaymentFormInput: PaymentFormInput;
  PaymentMethod: PaymentMethod;
  PaymentMethodInput: PaymentMethodInput;
  Query: {};
  String: Scalars['String']['output'];
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  neighborhood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  addresses?: Resolver<Array<Maybe<ResolversTypes['Address']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  document?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deleteCurrency?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCurrencyArgs, 'id'>>;
  deletePaymentForm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeletePaymentFormArgs, 'id'>>;
  deletePaymentMethod?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeletePaymentMethodArgs, 'id'>>;
  saveCurrency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType, RequireFields<MutationSaveCurrencyArgs, 'input'>>;
  saveCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationSaveCustomerArgs, 'input'>>;
  savePaymentForm?: Resolver<ResolversTypes['PaymentForm'], ParentType, ContextType, RequireFields<MutationSavePaymentFormArgs, 'input'>>;
  savePaymentMethod?: Resolver<ResolversTypes['PaymentMethod'], ParentType, ContextType, RequireFields<MutationSavePaymentMethodArgs, 'input'>>;
  updateCurrency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType, RequireFields<MutationUpdateCurrencyArgs, 'id' | 'input'>>;
  updatePaymentForm?: Resolver<ResolversTypes['PaymentForm'], ParentType, ContextType, RequireFields<MutationUpdatePaymentFormArgs, 'id' | 'input'>>;
  updatePaymentMethod?: Resolver<ResolversTypes['PaymentMethod'], ParentType, ContextType, RequireFields<MutationUpdatePaymentMethodArgs, 'id' | 'input'>>;
};

export type PaymentFormResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentForm'] = ResolversParentTypes['PaymentForm']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentMethod'] = ResolversParentTypes['PaymentMethod']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentTerm?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  currencies?: Resolver<Array<Maybe<ResolversTypes['Currency']>>, ParentType, ContextType, RequireFields<QueryCurrenciesArgs, 'direction' | 'page' | 'perPage' | 'search' | 'sort'>>;
  currencyById?: Resolver<ResolversTypes['Currency'], ParentType, ContextType, RequireFields<QueryCurrencyByIdArgs, 'id'>>;
  customerById?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<QueryCustomerByIdArgs, 'id'>>;
  customers?: Resolver<Array<Maybe<ResolversTypes['Customer']>>, ParentType, ContextType, RequireFields<QueryCustomersArgs, 'direction' | 'page' | 'perPage' | 'search' | 'sort'>>;
  paymentFormById?: Resolver<ResolversTypes['PaymentForm'], ParentType, ContextType, RequireFields<QueryPaymentFormByIdArgs, 'id'>>;
  paymentForms?: Resolver<Array<Maybe<ResolversTypes['PaymentForm']>>, ParentType, ContextType, RequireFields<QueryPaymentFormsArgs, 'direction' | 'page' | 'perPage' | 'search' | 'sort'>>;
  paymentMethodById?: Resolver<ResolversTypes['PaymentMethod'], ParentType, ContextType, RequireFields<QueryPaymentMethodByIdArgs, 'id'>>;
  paymentMethods?: Resolver<Array<Maybe<ResolversTypes['PaymentMethod']>>, ParentType, ContextType, RequireFields<QueryPaymentMethodsArgs, 'direction' | 'page' | 'perPage' | 'search' | 'sort'>>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PaymentForm?: PaymentFormResolvers<ContextType>;
  PaymentMethod?: PaymentMethodResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

