import useAuth from '@/hooks/useAuth'
import React from 'react'
import { FaPen, FaQuestionCircle } from 'react-icons/fa'
import { VscAccount } from 'react-icons/vsc'
import { BiTransfer } from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'

interface AccountMenuProps {
  visible?: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { logout, user } = useAuth()

  if (!visible) {
    return null
  }

  return (
    <div className="bg-black w-56 absolute top-9 border-t-2 border-t-white opacity-80 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image className="w-8 rounded-md" src="https://rb.gy/g1pwyx" alt="" />
          <p className="text-white text-sm group-hover/item:underline">Me</p>
        </div>
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            className="w-8 rounded-md"
            src="data:image/png;base64,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"
            alt=""
          />
          <p className="text-white text-sm group-hover/item:underline">Ali</p>
        </div>
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            className="w-8 rounded-md"
            src="data:image/png;base64,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"
            alt=""
          />
          <p className="text-white text-sm group-hover/item:underline">
            Friend
          </p>
        </div>
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            className="w-8 rounded-md"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEWFpz7///+BpDWDpjuApDR8oSl+oi57oSb8/fmvxIqJqkF/oy34+vS2yY3q8N7R3bqOrkrw9Onj69Xr8OGvxYKYtV709/CzyIm7zpbz9+vW4cLO27Wgum2Ws1qTsVSPr03D1KXf6M6ct2apwnu4zJTB0qHT3sGatmTK2K6iu3OCWtI8AAAEMUlEQVR4nO3c63aiPBQGYMgOkS+gnJEiIii2eP83+ImddjyQmSoZsF3v86P9t9feOZCIiYYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCNEXExm80szibOgwnrmIZgpDuu8ZbVaZqGVeFPWCOxMvaiNI28uCStNbJlbX5YZFJz+309je3K/kjDbROhLTBx7zNwJ5yoG61lep5GEAtNTc2SyLyUFlOUKL2rNMyW64nsLK4jm2k5folWe5OGmTkaAhPdNF03Gf2x5yLb9aTh7jS0NNvZPaHNauROpM3tSDK7R8Lw0KLui2wG5bidyJreNMzhnUib/shmPG4nit4uNM3aGhqZzRUV5vpWo68gRRq2HBpZ5IrQ6UxH4l/FClWFxdDZYl2vhfoa7x5sqUjDnA+dLeoKN2M+atQV7oeu+j+/D5Xz0H2SeTh4ueCZIvTIz1L5z4YSlYrQy5HXQ8VsCQevh6o9zcuT7Gk0bDwUc7wdeedN66AvjYWGfSkZfc+aaPzPFn0tbWvZO5J/OwXsZPzPh87qtsK9nscd275cBXZHfsy8kzeDydM1kJh/GTsqx10pPsz27nka6Vzjqyhqfn94cfebqd4n8uKsqfNCazszKtqgs9oZul/G3pMGW2dhl0adbfS/ExaW9KUjpn7nzR3u+8c/0zUzAAAAAAAAAAAAAAAA/DwkJv8m7J8ikbSv3px+ao2Mkvx0OjvYTvtFIgnpS123Is7COsXn1ZKXtylLZGUeBIHn6/1CmrEkPzuy4E1zbOKEL98b2q5KTVc/uqB+XF+eORl+su1RJD9bOlrq+eKdCdksrm9HjHqU9wI/v4qSNuXQGon7h55zUeaoR3kvyMsLBFG7th6ekER8llRhT33my6hHeS/411ck7HC3YY8Uybgss9Dtq0/DMeiHkdFzCeRltdw496XEhH+o6t6rSZ12ukFq8KovIzuol1LwY1/+tTOJMS5k7EWK3jtyG2PC5ZCc6zONZ13ZHEo61qlKj5hw/PWu8VRXBU6CjE97Nopt/5Cfuwi9ptg4M0d0PfqBC2FZM5nE7WsYKYfmezNla33L7IOIKvUA+yUNvbaaHx0O3d+sXf2tshM7iqc8Qvgb3/atYMPlS5q8/35h7KB+Dj7IbgvjmT40MSvxes/ZP1he3UjtvzcwFLG3SvlYvbO+6iCfZXheOO65itehRdpBXsye+L0Fc5JGdUvsKxaruHzi8k6IURnn6f3PHTsNs8R4aEc7OmKO3LX5PeM1ylfxxvpWx7oZN9ZFs1Lczb4QtvPt2lDv7Z4WnX7shiXxvg7DKHIv9j22m0aLsPay3cbpfoZG74+0jIrouAkluU4OxX+dqmq6f4dDsS4l/8Ou/HuhrtCzfXf35zt3GwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjOF/yuszsUKzmWMAAAAASUVORK5CYII="
            alt=""
          />
          <p className="text-white text-sm group-hover/item:underline">
            Family
          </p>
        </div>
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            className="w-8 rounded-md"
            src="http://occ-0-6194-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ4A0D_KyHSDA95zx1UA0MK2HgY3_JC2ImiXV48pqZlpA1yUq8ePZdjlQF0_RdJEgT_B-z6bjjsR9jW82wgeXtIW8vM1pb8.png?r=b36"
            alt=""
          />
          <p className="text-white text-sm group-hover/item:underline">
            Children
          </p>
        </div>
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <FaPen className="w-8 text-white" />
          <p className="text-white text-sm group-hover/item:underline">
            Manage Profiles
          </p>
        </div>
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <BiTransfer className="w-8 text-white" />
          <p className="text-white text-sm group-hover/item:underline">
            Transfer Profile
          </p>
        </div>
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Link href="/account">
            <VscAccount className="w-8 text-white" />
          </Link>
          <p className="text-white text-sm group-hover/item:underline">
            Account
          </p>
        </div>
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <FaQuestionCircle className="w-8 text-white" />
          <p className="text-white text-sm group-hover/item:underline">
            Help Center
          </p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div
        onClick={() => logout()}
        className="px-3 text-center text-white text-sm hover:underline"
      >
        Sign out of Netflix
      </div>
    </div>
  )
}

export default AccountMenu
