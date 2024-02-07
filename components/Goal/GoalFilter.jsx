import React, { useState, useCallback } from 'react';
import { SearchBar, Button, Picker } from 'antd-mobile';
import { FilterOutline } from 'antd-mobile-icons';
import debounce from 'lodash/debounce';
import { GAME_OPTION } from 'constants/Game';

function GoalFilter() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(["all"])
  const [search, setSearch] = useState('');

  const basicColumns = [
    [
      { label: 'Tất cả', value: "all" },
      ...GAME_OPTION
    ],
  ]

  console.log("visible" , visible);
  const handleSearch = (searchValue) => {
    console.log('Searching for:', searchValue);
  };

  const debouncedSearch = useCallback(
    debounce((nextValue) => handleSearch(nextValue), 800),
    [],
  );

  const onChange = (searchValue) => {
    setSearch(searchValue);
    debouncedSearch(searchValue);
  };

  return (
    <div>
      <div className='mb-2 w-full flex' style={{ gap: 8 }}>
        <div style={{ flex: "1" }}>
          <SearchBar
            placeholder='Tìm kiếm...'
            style={{ '--height': '40px', }}
            onChange={onChange}
            value={search}
          />
        </div>
        <Button
          onClick={() => {
            setVisible(true);
          }}
          style={{ height: '40px' }}
          size="large"
        >
          <FilterOutline />
        </Button>
        <Picker
          columns={basicColumns}
          visible={visible}
          title="Thuộc game"
          confirmText="Lọc"
          cancelText="Hủy"
          onClose={() => {
            setVisible(false)
          }}
          value={value}
          onConfirm={v => {
            setValue(v)
          }}
        />
      </div>
      {value[0] !== "all" && (
        <div className='mt-1 text-sm mb-1'>
          {`Lọc : ${value}`}
        </div>
      )}
    </div>
  );
}

export default GoalFilter;