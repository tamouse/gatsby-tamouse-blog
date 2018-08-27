import React from 'react'
import CategoryList from './CategoryList'
import TagList from './TagList'

const BulletMark = () => <span> &bull; </span>

export default ({ date, category, tags }) => (
  <div>
    <small>
      {date ? <span>{date}</span> : null}
      {date && (category || tags.length > 0) ? <BulletMark /> : null}
      <CategoryList category={category} />
      {(date || category) && tags.length > 0 ? <BulletMark /> : null}
      <TagList tags={tags} />
    </small>
  </div>
)
