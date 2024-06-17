import Login from "./login"
function App() {
    return (
        <div>
            {/* <Login>

            </Login> */}
            <Login title='sign up'
                   list={['free domain']}
            />
            <Login title='register'
                   list={['free domain',
                        'free hosting', 
                        'SSL key'
            ]}/>

        </div>
    )
}

export default App