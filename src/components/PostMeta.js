import React from 'react'
import CategoryList from './CategoryList'
import TagList from './TagList'

const BulletMark = () => <span> &bull; </span>

export default ({ date, categories, tags }) => (
  <div>
    {date ? <small>{date}</small> : null}
    {date && (categories.length > 0 || tags.length > 0) ? <BulletMark /> : null}
    <CategoryList categories={categories} />
    {categories.length > 0 && tags.length > 0 ? <BulletMark /> : null}
    <TagList tags={tags} />
  </div>
)
