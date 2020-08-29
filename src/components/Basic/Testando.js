import React from 'react';
import BaseLayout from '../Base/BaseLayout';
import { Button } from "@chakra-ui/core";
import { incrementAge, selectAge } from './testandoSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Testando() {

  // responsável por chamar uma setter
  const dispatch = useDispatch(),
        age = useSelector(selectAge)

  function addsAge() {
    dispatch(incrementAge(5))
  }

	return (
    <BaseLayout>
      <Button onClick={addsAge} variantColor="green">
				Hello World {age}
      </Button>
    </BaseLayout>
	)
}