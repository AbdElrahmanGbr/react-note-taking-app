import {Col, Row, Stack, Form} from "react-bootstrap";

export const NoteForm: React.FC<{  }> = props => {
    return (
        <Form>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId={"title"}>
                        <Form.Label>Title</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId={"tag"}>
                            <Form.Label>Tags</Form.Label>
                            <Form.Select required />
                        </Form.Group>
                    </Col>
                </Row>
            </Stack>
        </Form>
    );
};