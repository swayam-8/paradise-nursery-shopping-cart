import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import { plants, categories, money } from './plants.js';
export default function ProductList() {
 const [filter,setFilter] = useState('All plants');
 const items = useSelector(state => state.cart.items); const dispatch = useDispatch();
 return <main className="catalog"><div className="page-intro"><p className="eyebrow">YOUR OWN LITTLE PARADISE</p><h1>Find your green companion.</h1><p>Thoughtfully chosen plants. A happier, greener home.</p></div><div className="filters" aria-label="Filter plants">{['All plants',...categories].map(category => <button key={category} className={filter===category?'selected':''} onClick={()=>setFilter(category)} aria-pressed={filter===category}>{category}</button>)}</div>{categories.filter(category => filter==='All plants'||filter===category).map(category => <section key={category} className="plant-section"><div className="section-title"><h2>{category}</h2><span>6 plants to discover</span></div><div className="plant-grid">{plants.filter(plant=>plant.category===category).map(plant=>{const added=items.some(item=>item.id===plant.id);return <article className="plant-card" key={plant.id}><div className="plant-image"><img src={plant.image} alt={plant.name} loading="lazy"/><span className="plant-tag">Grown with care</span></div><div className="plant-info"><div className="plant-heading"><h3>{plant.name}</h3><strong>{money(plant.price)}</strong></div><p>{plant.description}</p><button disabled={added} onClick={()=>dispatch(addItem(plant))}>{added?'✓ Added to cart':'+ Add to Cart'}</button></div></article>})}</div></section>)}</main>;
}
