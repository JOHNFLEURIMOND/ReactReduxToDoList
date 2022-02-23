import React, { useState } from 'react';
import { GlobalStyle } from '../layout/global-style';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { addTodos, updateTodos, completeTodos, removeTodos } from '../Redux/reducer';
import { List, Segment, Button } from 'semantic-ui-react';
import { ProjectsSectionContainer, UL, ButtonArea, CardContainer } from './index';
import ToDoItem from './ToDoItem';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};
const CompletedItems = (props) => {
  const [sort, setSort] = useState('completed');
  const history = useHistory();
  return (
    <ProjectsSectionContainer>
      <GlobalStyle />
      <ButtonArea>
        <Button basic color='green' onClick={() => setSort('completed')}>
          Completed
        </Button>

        <Button basic color='red   ' onClick={() => setSort('all')}>
          All
        </Button>
      </ButtonArea>

      {/* for completed items */}
      <CardContainer>
        {props.todos.length > 0 && sort === 'completed'
          ? props.todos.map((item) => {
            return (
              item.completed === true && (
                <Segment key={item.id}>
                  <List divided relaxed>
                    <List.Item>
                      <List.Content>{item.item}</List.Content>
                    </List.Item>
                  </List>

                  <UL>
                    <li key={item.id} style={{ listStyle: 'none !important' }}>
                      <ToDoItem
                        key={item.id}
                        item={item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                      />
                    </li>
                  </UL>
                </Segment>
              )
            );
          })
          : null}
        {/* for all items */}
        {props.todos.length > 0 && sort === 'all'
          ? props.todos.map((item) => {
            return (
              <Segment key={item.id}>
                <List divided relaxed>
                  <List.Item>
                    <List.Content>{item.item}</List.Content>
                  </List.Item>
                </List>

                <UL>
                  <li key={item.id} style={{ listStyle: 'none !important' }}>
                    <ToDoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  </li>
                </UL>
              </Segment>
            );
          })
          : null}
      </CardContainer>
      <Button onClick={() => history.push("/", { from: "CompletedItems" })}>
        HomePage
      </Button>
    </ProjectsSectionContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompletedItems);
