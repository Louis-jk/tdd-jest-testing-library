import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>お問い合わせフォーム</h1>
        <h2>お問い合わせフォームです。</h2>
        <span title="close">x</span>
        <p>すべてのフィールドは必須項目です。</p>

        <img src="https://placehold.co/600x400" alt="sample alt" />

        <div data-testid="custom-element">カスタムHTML</div>
        
        <form>
            <div>
                <label htmlFor="name">名前</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="名前を入力してください" 
                    value="山田太郎"
                    onChange={() => {}}
                 />
            </div>

            <div>
                <label htmlFor="email">メールアドレス</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div>
                <label htmlFor="question">お問い合わせ内容</label>
                <select id="question" name="question" required>
                    <option value="">選択してください</option>
                    <option value="dev">開発案件のご相談</option>
                    <option value="video">撮影のご相談</option>
                    <option value="sns-marketing">SNSマーケティングのご相談</option>
                </select>
            </div>

            <div>
                <label>
                <input type="checkbox" id="terms" />
                利用規約に同意します。
                </label>
            </div>

            <button type="submit">送信</button>
        </form>
    </div>
  )
}

export default Contact