arr = [
    
       { dp: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
        story : 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D'},
        {
        dp: 'https://images.unsplash.com/photo-1467632499275-7a693a761056?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
        story: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {
        dp: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww',
        story: 'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D'},
        {
        dp: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D',
        story: 'https://images.unsplash.com/photo-1517805686688-47dd930554b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdpcmwlMjBwcm9maWxlJTIwcGljfGVufDB8fDB8fHww'},
        {
        dp: 'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGdpcmwlMjBwcm9maWxlJTIwcGljfGVufDB8fDB8fHww',
        story: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D" },
]

var clutter = ''
arr.forEach(function(elem,idx){
 clutter += ` <div class="story">
                <img
                src="${elem.dp}"
                alt="story">
               </div>
               `      
})
document.querySelector('#storiyan').innerHTML = clutter;