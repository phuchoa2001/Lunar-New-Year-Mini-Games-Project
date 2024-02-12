import React, { useState, useCallback, useEffect } from 'react';
import { SearchBar, Button, Picker } from 'antd-mobile';
import { FilterOutline } from 'antd-mobile-icons';
import debounce from 'lodash/debounce';
import { GAME_OPTION } from 'constants/Game';

function GoalFilter({ filter, setFilter }) {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(["all"])
  const [search, setSearch] = useState('');

  const basicColumns = [
    [
      { label: 'Tất cả', value: "all" },
      ...GAME_OPTION
    ],
  ]

  const handleSearch = (searchValue) => {
    setFilter((prev) => ({
      ...prev,
      page: 1,
      search: searchValue ? searchValue : null
    }))
  };

  const debouncedSearch = useCallback(
    debounce((nextValue) => handleSearch(nextValue), 800),
    [],
  );

  const onChange = (searchValue) => {
    setSearch(searchValue);
    debouncedSearch(searchValue);
  };

  useEffect(() => {
    setSearch(filter.search)
  }, [filter.search])

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
          className='ant-button-fff'
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
          value={filter.filter?.inGame ? [filter.filter?.inGame] : ["all"]}
          onConfirm={v => {
            setFilter(prev => {
              const newPrev = { ...prev };
              if (v[0] === "all") {
                newPrev.page = 1;
                delete newPrev.filter.inGame;
              } else {
                newPrev.page = 1;
                newPrev.filter.inGame = v[0]
              }
              return newPrev;
            })
          }}
        />
      </div>
      {filter.filter?.inGame && (
        <div className='mt-1 text-sm mb-1'>
          {`Lọc : ${filter.filter?.inGame}`}
        </div>
      )}
    </div>
  );
}

export default GoalFilter;