import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Home=()=>{
  return(
      <>
         <div id="home">
          <h2>Login page</h2>

      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User ID</Form.Label>
        <Form.Control type="text" value={userid} onChange={(e)=>{setUserid(e.target.value)}}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="text" value={userid} onChange={(e)=>{setpassword(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" style={{width:"200px"}}>
      <Form.Label>Login As:</Form.Label>
      <Form.Select aria-label="Default select example" value={usertype} onChange={(e)=>{setUserType(e.target.value)}}>
      <option>Login User As</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </Form.Select>
    </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    
    </Form>

         </div>
      </>
  )
}
export default Home;