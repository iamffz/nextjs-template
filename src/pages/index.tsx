import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const Home: NextPage = () => {
  const { t } = useTranslation("common")
  return (
    <>
      <div></div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
      // Will be passed to the page component as props
    },
  }
}
