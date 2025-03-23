import { prismaClient } from "db/client"
const page = async () => {
  const users = await prismaClient.user.findMany();

  return (
    <div>
      {JSON.stringify(users)}
    </div>
  )
}

export const rervalidate = 60
// or
// export const dynamic = "force-dynamic"

export default page