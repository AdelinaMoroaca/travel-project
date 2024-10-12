import CategoryItem from '../category-item/CategoryItem';
import './CategoriesContainer.styles.scss';



function CategoriesContainer({categories}) {
    return (
        <div className='categories-container'>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category}/>
          ))}
        </div>
    )
}

export default CategoriesContainer;