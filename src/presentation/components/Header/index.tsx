import { useState } from 'react'
import { useFarmerContext } from '@/aplication/context/FarmContext'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Autocomplete,
  AutocompleteItem,
  Chip,
  Button,
} from '@nextui-org/react'
import { Leaf, Plus, Search } from 'lucide-react'
import ModalCreate from '../ModalCreate'
import { ICreateFarmer } from '@/domain/usecases/createFarmer'

interface IHeaderProps {
  createFarmer: ICreateFarmer
}

const Header = ({ createFarmer }: IHeaderProps) => {
  const { farmerData, setSearchedUser, searchedUser, farmerLoading } =
    useFarmerContext()

  const [openModal, setOpenModal] = useState(false)

  return (
    <Navbar className="p-4">
      <NavbarBrand className="gap-4">
        <img
          src="https://www.brain.agr.br/images/logo.png"
          className="saturate-0 brightness-200 w-24 md:w-36"
        />
        <Chip
          className="flex flex-initial text-xs gap-2"
          endContent={<Leaf size={16} />}
          variant="flat"
          color="secondary"
        >
          <span className="hidden md:inline md:mr-1">Farmer Dashboard</span>
          V1.0
        </Chip>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center gap-4">
          <Button
            className="md:hidden"
            isIconOnly
            variant="flat"
            color="secondary"
          >
            <Search />
          </Button>
          <Autocomplete
            label="Pesquise pelo Fazendeiro"
            className="max-w-xs hidden md:flex"
            selectedKey={searchedUser}
            onSelectionChange={setSearchedUser}
            disabled={farmerLoading}
          >
            {farmerData.map((farmer) => (
              <AutocompleteItem key={farmer.document} value={farmer.document}>
                {farmer.name}
              </AutocompleteItem>
            ))}
          </Autocomplete>
          <Button
            isIconOnly
            variant="faded"
            color="success"
            onClick={() => setOpenModal(true)}
          >
            <Plus />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <ModalCreate
        open={openModal}
        onClose={() => setOpenModal(false)}
        createFarmer={createFarmer}
      />
    </Navbar>
  )
}

export default Header
