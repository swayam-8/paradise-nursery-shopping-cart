import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartCount } from './CartSlice.jsx';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';
export default function App(){
 const [page,setPage]=useState('home'); const count=useSelector(selectCartCount);
 const navigate=(next)=>{setPage(next);window.scrollTo({top:0,behavior:'instant'});};
 return <><header><button className="brand" onClick={()=>navigate('home')}><span className="brand-icon">❧</span><span>Paradise Nursery<small>BRING LIFE HOME</small></span></button><nav aria-label="Main navigation"><button aria-current={page==='home'?'page':undefined} onClick={()=>navigate('home')}>Home</button><button aria-current={page==='plants'?'page':undefined} onClick={()=>navigate('plants')}>Plants</button><button className="cart-link" aria-label={`Cart, ${count} items`} aria-current={page==='cart'?'page':undefined} onClick={()=>navigate('cart')}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M3 3h2l3 12h11l2-8H6M9 20h.01M18 20h.01" strokeLinecap="round" strokeLinejoin="round"/></svg>Cart <span>{count}</span></button></nav></header>{page==='home'?<main><section className="hero"><div className="hero-content"><p className="eyebrow">A GREENER HOME STARTS HERE</p><h1>Bring a little<br/>paradise <em>home.</em></h1><p>Beautiful plants. Brighter spaces.<br/>Discover the joy of growing something good.</p><button className="primary" onClick={()=>navigate('plants')}>Get Started <span>↗</span></button><div className="hero-note"><span>✦</span> Nurtured by nature. Chosen for you.</div></div><div className="hero-caption">GROW SOMETHING BEAUTIFUL</div></section><div className="benefits"><span>❧ Thoughtfully selected plants</span><span>☀ Greenery for every space</span><span>♡ A little joy, every day</span></div><AboutUs/></main>:page==='plants'?<ProductList/>:<CartItem onContinue={()=>navigate('plants')}/>}<footer><span>❧ Paradise Nursery</span><p>Make room for a little green.</p><small>© {new Date().getFullYear()} Paradise Nursery</small></footer></>;
}
