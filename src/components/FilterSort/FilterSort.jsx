/** @format */

import PrimaryButton from 'components/buttons/PrimaryButton';
import 'components/FilterSort/FilterSort.scss';
import DropMenu from 'components/inputs/DropMenu';
import SmallInput from 'components/inputs/SmallInput';
import updateInputs from 'functions/updateInputs';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const FilterSort = props => {
  const [inputs, setInputs] = useState({
    search: props.searchvalue,
    sort: props.sortvalue,
  });
  const firstRender = useRef(true);
  const handleInputChange = ev => {
    updateInputs(ev, setInputs);
  };

  const handleSearch = () => {
    props.onclick(inputs.search);
  };
  useEffect(() => {
    // ignore first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (inputs.sort != '') {
      props.sortonchange(inputs.sort);
    }
  }, [inputs.sort]);
  return (
    <div className='row mb-3 d-flex justify-content-between gap-3'>
      <div className='col-sm-3 d-flex gap-2'>
        <SmallInput
          type='text'
          datalabel='search'
          placeholder='search'
          value={inputs.search}
          onchange={handleInputChange}
        />
        <PrimaryButton
          placeholder='Find'
          type='button'
          onclick={handleSearch}
        />
      </div>
      <div className='col-sm-2 d-flex gap-2'>
        <DropMenu
          datalabel='sort'
          options={['Sort', 'A-Z', 'Z-A']}
          value={inputs.sort}
          onchange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default FilterSort;
