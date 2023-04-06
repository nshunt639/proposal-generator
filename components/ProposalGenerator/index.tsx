import { useState, useCallback, useRef, useEffect } from 'react'

import { useAxios } from "hooks/axios.hooks"

import { Loader } from 'components/shared/Loader';
import { DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/outline'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
// import GoogleAdSense from 'components/GoogleAdSense';

export default function ProposalGenerator() {
    const [post, setPost] = useState('')

    const topicInputRef = useRef<HTMLTextAreaElement>(null);

    const [{ loading }, generate] = useAxios({ url: '/generate' })

    const [proposal, setProposal] = useState('')

    const handleGenerate = useCallback(async () => {
        setCopied(false)
        toast.dismiss()

        const { response, error } = await generate({ params: { post } })
        if (error) {
            setProposal('')
            toast.error(`An error occurred while getting the response from the server.${error ? ` (${error as string})` : ''}`)
            return
        }

        setProposal(response.proposal)
    }, [post])

    useEffect(() => {
        topicInputRef.current && topicInputRef.current.focus();
    }, [])

    const ln2br = (text: string) => text && text.replace(/\n/g, "<br />") || ''

    const [copied, setCopied] = useState<boolean>(false)

    const onCopied = () => {
        setCopied(true)
        toast.success('The proposal copied!')
    }

    return (
        <div className="max-w-screen-xl mx-auto w-full h-full flex-1 px-6">

            <div className="space-y-4">
                <div className="">
                    <textarea ref={topicInputRef} className="block w-full p-4" rows={10} value={post} onChange={(e) => setPost(e.target.value)} placeholder={"Enter the job post here."} />
                </div>

                <div className="flex flex-wrap gap-4 justify-end">
                    <button disabled={loading} className='bg-purple-600 hover:bg-purple-700 text-white capitalize' onClick={() => handleGenerate()}>
                        {loading && <span className='flex items-center'>Generating<span className='ml-2'><Loader height='24px' /></span></span> || <span>Generate</span>}
                    </button>
                </div>

                <div className="">
                    <div className='rounded-md border border-gray-200 min-h-[360px] p-4 relative group'>
                        {loading ?
                            <div className="animate-pulse"><ProposalOutputPlaceholder /></div>
                            :
                            proposal ?
                                <>
                                    <p dangerouslySetInnerHTML={{ __html: ln2br(proposal) }} />
                                    <span className='absolute bottom-4 right-4 opacity-0  group-hover:opacity-100 transition-opacity ease-in-out'>
                                        <CopyToClipboard text={proposal}
                                            onCopy={onCopied}>
                                            <button className={`w-8 h-8 p-0 bg-orange-500 ${copied ? '' : ''}`}>
                                                {copied ?
                                                    <CheckIcon className="h-5 w-5 text-white" />
                                                    :
                                                    <DocumentDuplicateIcon className="h-5 w-5 text-white" />
                                                }
                                            </button>
                                        </CopyToClipboard>
                                    </span>
                                </>
                                :
                                <div className='opacity-30'><ProposalOutputPlaceholder /></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProposalOutputPlaceholder = () => (
    <div className='space-y-4'>
        <div className="h-4 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded-md mr-4"></div>
        <div className="h-4 bg-gray-300 rounded-md mr-8"></div>
        <div className="h-4 bg-gray-300 rounded-md mr-12"></div>
        <div className="h-4 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded-md mr-6"></div>
        <div className="h-4 bg-gray-300 rounded-md mr-12"></div>
        <div className="h-4 bg-gray-300 rounded-md mr-18"></div>
        <div className="h-4 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded-md mr-4"></div>
    </div>
)