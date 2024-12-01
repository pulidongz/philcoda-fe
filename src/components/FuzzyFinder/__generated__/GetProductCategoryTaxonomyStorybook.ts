/* tslint:disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProductCategoryTaxonomyStorybook
// ====================================================

export interface GetProductCategoryTaxonomyStorybook_productCategoryTaxonomies {
  __typename: 'ProductCategoryTaxonomy'
  /**
   * ID of the category
   */
  value: string
  /**
   * The full path (including parent categories) separated by '>'
   */
  label: string
}

export interface GetProductCategoryTaxonomyStorybook {
  /**
   * Full list of product category taxonomies
   */
  productCategoryTaxonomies: GetProductCategoryTaxonomyStorybook_productCategoryTaxonomies[]
}
