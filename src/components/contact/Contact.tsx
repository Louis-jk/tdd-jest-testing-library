import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>お問い合わせフォーム</h1>
        <p>すべてのフィールドは必須項目です。</p>
        
        <form>
            <div>
                <label htmlFor="name">名前</label>
                <input type="text" id="name" name="name" required />
            </div>            
        </form>
    </div>
  )
}

export default Contact