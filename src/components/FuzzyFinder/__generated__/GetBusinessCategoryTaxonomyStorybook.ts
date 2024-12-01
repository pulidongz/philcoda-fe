/* tslint:disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBusinessCategoryTaxonomyStorybook
// ====================================================

export interface GetBusinessCategoryTaxonomyStorybook_businessCategoryTaxonomies {
  __typename: 'BusinessCategoryTaxonomy'
  /**
   * ID of the category
   */
  value: string
  /**
   * The full path (including parent categories) separated by '>'
   */
  label: string
}

export interface GetBusinessCategoryTaxonomyStorybook {
  /**
   * Full list of business category taxonomies
   */
  businessCategoryTaxonomies: GetBusinessCategoryTaxonomyStorybook_businessCategoryTaxonomies[]
}
