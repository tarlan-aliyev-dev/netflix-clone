import { FaCheck } from 'react-icons/fa'

function Table() {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          <td className="text-[#E50914]">AED 100$</td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>
          <td className="text-[#E50914]">Video Quality</td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          <td className="text-[#E50914]">Product Resolution</td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          <td className="text-[#E50914]">
            Product Portability
            <FaCheck className="inline-block h-8 w-8" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
