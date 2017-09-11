import * as React from 'react';

// searchbox:google.maps.places.Autocomplete


interface US_ADDRESS {street: string, street2: string, city: string, state: string
}

export class AddressFillComponent extends React.Component<{}, {}> {


    componentDidMount() {
        // let input = document.getElementById('address_input');
        //
        // let autocomplete = new google.maps.places.Autocomplete(input);
        // autocomplete.addListener('place_changed', () => {
        //     let place = autocomplete.getPlace();
        //     console.log(place)
        // });
        //
        // this.setState({searchbox:autocomplete});
    }

    render() {
        return <div>

            <form className="ui form">
                <h4 className="ui dividing header">Recipient Information</h4>
                <div className="field">
                    <label>Name</label>
                    <div className="two fields">
                        <div className="field">
                            <input type="text" name="shipping[first-name]" placeholder="First Name"/>
                        </div>
                        <div className="field">
                            <input type="text" name="shipping[last-name]" placeholder="Last Name"/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label>Shipping Address</label>
                    <div className="fields">
                        <div className="twelve wide field">
                            <input type="text" name="shipping[address]" placeholder="Street Address"/>
                        </div>
                        <div className="four wide field">
                            <input type="text" name="shipping[address-2]" placeholder="Apt #"/>
                        </div>
                    </div>
                </div>
                {/*Move country selctor (below) to the next line*/}
                <div className="two fields">
                    <div className="field">
                        <label>State/Province</label>
                        <select className="ui fluid dropdown">
                            <option value="">State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>

                    <div className="field">
                        <label>Zip Code</label>
                        <input type="text" name="zipcode" placeholder="Zip Code"/>
                    </div>
                    {/*<div className="field">*/}
                    {/*<label>Country</label>*/}
                    {/*<div className="ui fluid search selection dropdown">*/}
                    {/*<input type="hidden" name="country"/>*/}
                    {/*<i className="dropdown icon"/>*/}
                    {/*<div className="default text">Select Country</div>*/}
                    {/*<div className="menu">*/}
                    {/*<div className="item" ><i className="af flag"/>Afghanistan</div>*/}
                    {/*<div className="item" ><i className="ax flag"/>Aland Islands</div>*/}
                    {/*<div className="item" ><i className="al flag"/>Albania</div>*/}
                    {/*<div className="item" ><i className="dz flag"/>Algeria</div>*/}
                    {/*<div className="item" ><i className="as flag"/>American Samoa</div>*/}
                    {/*<div className="item" ><i className="ad flag"/>Andorra</div>*/}
                    {/*<div className="item" ><i className="ao flag"/>Angola</div>*/}
                    {/*<div className="item" ><i className="ai flag"/>Anguilla</div>*/}
                    {/*<div className="item" ><i className="ag flag"/>Antigua</div>*/}
                    {/*<div className="item" ><i className="ar flag"/>Argentina</div>*/}
                    {/*<div className="item" ><i className="am flag"/>Armenia</div>*/}
                    {/*<div className="item" ><i className="aw flag"/>Aruba</div>*/}
                    {/*<div className="item" ><i className="au flag"/>Australia</div>*/}
                    {/*<div className="item" ><i className="at flag"/>Austria</div>*/}
                    {/*<div className="item" ><i className="az flag"/>Azerbaijan</div>*/}
                    {/*<div className="item" ><i className="bs flag"/>Bahamas</div>*/}
                    {/*<div className="item" ><i className="bh flag"/>Bahrain</div>*/}
                    {/*<div className="item" ><i className="bd flag"/>Bangladesh</div>*/}
                    {/*<div className="item" ><i className="bb flag"/>Barbados</div>*/}
                    {/*<div className="item" ><i className="by flag"/>Belarus</div>*/}
                    {/*<div className="item" ><i className="be flag"/>Belgium</div>*/}
                    {/*<div className="item" ><i className="bz flag"/>Belize</div>*/}
                    {/*<div className="item" ><i className="bj flag"/>Benin</div>*/}
                    {/*<div className="item" ><i className="bm flag"/>Bermuda</div>*/}
                    {/*<div className="item" ><i className="bt flag"/>Bhutan</div>*/}
                    {/*<div className="item" ><i className="bo flag"/>Bolivia</div>*/}
                    {/*<div className="item" ><i className="ba flag"/>Bosnia</div>*/}
                    {/*<div className="item" ><i className="bw flag"/>Botswana</div>*/}
                    {/*<div className="item" ><i className="bv flag"/>Bouvet Island</div>*/}
                    {/*<div className="item" ><i className="br flag"/>Brazil</div>*/}
                    {/*<div className="item" ><i className="vg flag"/>British Virgin Islands</div>*/}
                    {/*<div className="item" ><i className="bn flag"/>Brunei</div>*/}
                    {/*<div className="item" ><i className="bg flag"/>Bulgaria</div>*/}
                    {/*<div className="item" ><i className="bf flag"/>Burkina Faso</div>*/}
                    {/*<div className="item" ><i className="mm flag"/>Burma</div>*/}
                    {/*<div className="item" ><i className="bi flag"/>Burundi</div>*/}
                    {/*<div className="item" ><i className="tc flag"/>Caicos Islands</div>*/}
                    {/*<div className="item" ><i className="kh flag"/>Cambodia</div>*/}
                    {/*<div className="item" ><i className="cm flag"/>Cameroon</div>*/}
                    {/*<div className="item" ><i className="ca flag"/>Canada</div>*/}
                    {/*<div className="item" ><i className="cv flag"/>Cape Verde</div>*/}
                    {/*<div className="item" ><i className="ky flag"/>Cayman Islands</div>*/}
                    {/*<div className="item" ><i className="cf flag"/>Central African Republic</div>*/}
                    {/*<div className="item" ><i className="td flag"/>Chad</div>*/}
                    {/*<div className="item" ><i className="cl flag"/>Chile</div>*/}
                    {/*<div className="item" ><i className="cn flag"/>China</div>*/}
                    {/*<div className="item" ><i className="cx flag"/>Christmas Island</div>*/}
                    {/*<div className="item" ><i className="cc flag"/>Cocos Islands</div>*/}
                    {/*<div className="item" ><i className="co flag"/>Colombia</div>*/}
                    {/*<div className="item" ><i className="km flag"/>Comoros</div>*/}
                    {/*<div className="item" ><i className="cg flag"/>Congo Brazzaville</div>*/}
                    {/*<div className="item" ><i className="cd flag"/>Congo</div>*/}
                    {/*<div className="item" ><i className="ck flag"/>Cook Islands</div>*/}
                    {/*<div className="item" ><i className="cr flag"/>Costa Rica</div>*/}
                    {/*<div className="item" ><i className="ci flag"/>Cote Divoire</div>*/}
                    {/*<div className="item" ><i className="hr flag"/>Croatia</div>*/}
                    {/*<div className="item" ><i className="cu flag"/>Cuba</div>*/}
                    {/*<div className="item" ><i className="cy flag"/>Cyprus</div>*/}
                    {/*<div className="item" ><i className="cz flag"/>Czech Republic</div>*/}
                    {/*<div className="item" ><i className="dk flag"/>Denmark</div>*/}
                    {/*<div className="item" ><i className="dj flag"/>Djibouti</div>*/}
                    {/*<div className="item" ><i className="dm flag"/>Dominica</div>*/}
                    {/*<div className="item" ><i className="do flag"/>Dominican Republic</div>*/}
                    {/*<div className="item" ><i className="ec flag"/>Ecuador</div>*/}
                    {/*<div className="item" ><i className="eg flag"/>Egypt</div>*/}
                    {/*<div className="item" ><i className="sv flag"/>El Salvador</div>*/}
                    {/*<div className="item" ><i className="gb flag"/>England</div>*/}
                    {/*<div className="item" ><i className="gq flag"/>Equatorial Guinea</div>*/}
                    {/*<div className="item" ><i className="er flag"/>Eritrea</div>*/}
                    {/*<div className="item" ><i className="ee flag"/>Estonia</div>*/}
                    {/*<div className="item" ><i className="et flag"/>Ethiopia</div>*/}
                    {/*<div className="item" ><i className="eu flag"/>European Union</div>*/}
                    {/*<div className="item" ><i className="fk flag"/>Falkland Islands</div>*/}
                    {/*<div className="item" ><i className="fo flag"/>Faroe Islands</div>*/}
                    {/*<div className="item" ><i className="fj flag"/>Fiji</div>*/}
                    {/*<div className="item" ><i className="fi flag"/>Finland</div>*/}
                    {/*<div className="item" ><i className="fr flag"/>France</div>*/}
                    {/*<div className="item" ><i className="gf flag"/>French Guiana</div>*/}
                    {/*<div className="item" ><i className="pf flag"/>French Polynesia</div>*/}
                    {/*<div className="item" ><i className="tf flag"/>French Territories</div>*/}
                    {/*<div className="item" ><i className="ga flag"/>Gabon</div>*/}
                    {/*<div className="item" ><i className="gm flag"/>Gambia</div>*/}
                    {/*<div className="item" ><i className="ge flag"/>Georgia</div>*/}
                    {/*<div className="item" ><i className="de flag"/>Germany</div>*/}
                    {/*<div className="item" ><i className="gh flag"/>Ghana</div>*/}
                    {/*<div className="item" ><i className="gi flag"/>Gibraltar</div>*/}
                    {/*<div className="item" ><i className="gr flag"/>Greece</div>*/}
                    {/*<div className="item" ><i className="gl flag"/>Greenland</div>*/}
                    {/*<div className="item" ><i className="gd flag"/>Grenada</div>*/}
                    {/*<div className="item" ><i className="gp flag"/>Guadeloupe</div>*/}
                    {/*<div className="item" ><i className="gu flag"/>Guam</div>*/}
                    {/*<div className="item" ><i className="gt flag"/>Guatemala</div>*/}
                    {/*<div className="item" ><i className="gw flag"/>Guinea-Bissau</div>*/}
                    {/*<div className="item" ><i className="gn flag"/>Guinea</div>*/}
                    {/*<div className="item" ><i className="gy flag"/>Guyana</div>*/}
                    {/*<div className="item" ><i className="ht flag"/>Haiti</div>*/}
                    {/*<div className="item" ><i className="hm flag"/>Heard Island</div>*/}
                    {/*<div className="item" ><i className="hn flag"/>Honduras</div>*/}
                    {/*<div className="item" ><i className="hk flag"/>Hong Kong</div>*/}
                    {/*<div className="item" ><i className="hu flag"/>Hungary</div>*/}
                    {/*<div className="item" ><i className="is flag"/>Iceland</div>*/}
                    {/*<div className="item" ><i className="in flag"/>India</div>*/}
                    {/*<div className="item" ><i className="io flag"/>Indian Ocean Territory</div>*/}
                    {/*<div className="item" ><i className="id flag"/>Indonesia</div>*/}
                    {/*<div className="item" ><i className="ir flag"/>Iran</div>*/}
                    {/*<div className="item" ><i className="iq flag"/>Iraq</div>*/}
                    {/*<div className="item" ><i className="ie flag"/>Ireland</div>*/}
                    {/*<div className="item" ><i className="il flag"/>Israel</div>*/}
                    {/*<div className="item" ><i className="it flag"/>Italy</div>*/}
                    {/*<div className="item" ><i className="jm flag"/>Jamaica</div>*/}
                    {/*<div className="item" ><i className="jp flag"/>Japan</div>*/}
                    {/*<div className="item" ><i className="jo flag"/>Jordan</div>*/}
                    {/*<div className="item" ><i className="kz flag"/>Kazakhstan</div>*/}
                    {/*<div className="item" ><i className="ke flag"/>Kenya</div>*/}
                    {/*<div className="item" ><i className="ki flag"/>Kiribati</div>*/}
                    {/*<div className="item" ><i className="kw flag"/>Kuwait</div>*/}
                    {/*<div className="item" ><i className="kg flag"/>Kyrgyzstan</div>*/}
                    {/*<div className="item" ><i className="la flag"/>Laos</div>*/}
                    {/*<div className="item" ><i className="lv flag"/>Latvia</div>*/}
                    {/*<div className="item" ><i className="lb flag"/>Lebanon</div>*/}
                    {/*<div className="item" ><i className="ls flag"/>Lesotho</div>*/}
                    {/*<div className="item" ><i className="lr flag"/>Liberia</div>*/}
                    {/*<div className="item" ><i className="ly flag"/>Libya</div>*/}
                    {/*<div className="item" ><i className="li flag"/>Liechtenstein</div>*/}
                    {/*<div className="item" ><i className="lt flag"/>Lithuania</div>*/}
                    {/*<div className="item" ><i className="lu flag"/>Luxembourg</div>*/}
                    {/*<div className="item" ><i className="mo flag"/>Macau</div>*/}
                    {/*<div className="item" ><i className="mk flag"/>Macedonia</div>*/}
                    {/*<div className="item" ><i className="mg flag"/>Madagascar</div>*/}
                    {/*<div className="item" ><i className="mw flag"/>Malawi</div>*/}
                    {/*<div className="item" ><i className="my flag"/>Malaysia</div>*/}
                    {/*<div className="item" ><i className="mv flag"/>Maldives</div>*/}
                    {/*<div className="item" ><i className="ml flag"/>Mali</div>*/}
                    {/*<div className="item" ><i className="mt flag"/>Malta</div>*/}
                    {/*<div className="item" ><i className="mh flag"/>Marshall Islands</div>*/}
                    {/*<div className="item" ><i className="mq flag"/>Martinique</div>*/}
                    {/*<div className="item" ><i className="mr flag"/>Mauritania</div>*/}
                    {/*<div className="item" ><i className="mu flag"/>Mauritius</div>*/}
                    {/*<div className="item" ><i className="yt flag"/>Mayotte</div>*/}
                    {/*<div className="item" ><i className="mx flag"/>Mexico</div>*/}
                    {/*<div className="item" ><i className="fm flag"/>Micronesia</div>*/}
                    {/*<div className="item" ><i className="md flag"/>Moldova</div>*/}
                    {/*<div className="item" ><i className="mc flag"/>Monaco</div>*/}
                    {/*<div className="item" ><i className="mn flag"/>Mongolia</div>*/}
                    {/*<div className="item" ><i className="me flag"/>Montenegro</div>*/}
                    {/*<div className="item" ><i className="ms flag"/>Montserrat</div>*/}
                    {/*<div className="item" ><i className="ma flag"/>Morocco</div>*/}
                    {/*<div className="item" ><i className="mz flag"/>Mozambique</div>*/}
                    {/*<div className="item" ><i className="na flag"/>Namibia</div>*/}
                    {/*<div className="item" ><i className="nr flag"/>Nauru</div>*/}
                    {/*<div className="item" ><i className="np flag"/>Nepal</div>*/}
                    {/*<div className="item" ><i className="an flag"/>Netherlands Antilles</div>*/}
                    {/*<div className="item" ><i className="nl flag"/>Netherlands</div>*/}
                    {/*<div className="item" ><i className="nc flag"/>New Caledonia</div>*/}
                    {/*<div className="item" ><i className="pg flag"/>New Guinea</div>*/}
                    {/*<div className="item" ><i className="nz flag"/>New Zealand</div>*/}
                    {/*<div className="item" ><i className="ni flag"/>Nicaragua</div>*/}
                    {/*<div className="item" ><i className="ne flag"/>Niger</div>*/}
                    {/*<div className="item" ><i className="ng flag"/>Nigeria</div>*/}
                    {/*<div className="item" ><i className="nu flag"/>Niue</div>*/}
                    {/*<div className="item" ><i className="nf flag"/>Norfolk Island</div>*/}
                    {/*<div className="item" ><i className="kp flag"/>North Korea</div>*/}
                    {/*<div className="item" ><i className="mp flag"/>Northern Mariana Islands</div>*/}
                    {/*<div className="item" ><i className="no flag"/>Norway</div>*/}
                    {/*<div className="item" ><i className="om flag"/>Oman</div>*/}
                    {/*<div className="item" ><i className="pk flag"/>Pakistan</div>*/}
                    {/*<div className="item" ><i className="pw flag"/>Palau</div>*/}
                    {/*<div className="item" ><i className="ps flag"/>Palestine</div>*/}
                    {/*<div className="item" ><i className="pa flag"/>Panama</div>*/}
                    {/*<div className="item" ><i className="py flag"/>Paraguay</div>*/}
                    {/*<div className="item" ><i className="pe flag"/>Peru</div>*/}
                    {/*<div className="item" ><i className="ph flag"/>Philippines</div>*/}
                    {/*<div className="item" ><i className="pn flag"/>Pitcairn Islands</div>*/}
                    {/*<div className="item" ><i className="pl flag"/>Poland</div>*/}
                    {/*<div className="item" ><i className="pt flag"/>Portugal</div>*/}
                    {/*<div className="item" ><i className="pr flag"/>Puerto Rico</div>*/}
                    {/*<div className="item" ><i className="qa flag"/>Qatar</div>*/}
                    {/*<div className="item" ><i className="re flag"/>Reunion</div>*/}
                    {/*<div className="item" ><i className="ro flag"/>Romania</div>*/}
                    {/*<div className="item" ><i className="ru flag"/>Russia</div>*/}
                    {/*<div className="item" ><i className="rw flag"/>Rwanda</div>*/}
                    {/*<div className="item" ><i className="sh flag"/>Saint Helena</div>*/}
                    {/*<div className="item" ><i className="kn flag"/>Saint Kitts and Nevis</div>*/}
                    {/*<div className="item" ><i className="lc flag"/>Saint Lucia</div>*/}
                    {/*<div className="item" ><i className="pm flag"/>Saint Pierre</div>*/}
                    {/*<div className="item" ><i className="vc flag"/>Saint Vincent</div>*/}
                    {/*<div className="item" ><i className="ws flag"/>Samoa</div>*/}
                    {/*<div className="item" ><i className="sm flag"/>San Marino</div>*/}
                    {/*<div className="item" ><i className="gs flag"/>Sandwich Islands</div>*/}
                    {/*<div className="item" ><i className="st flag"/>Sao Tome</div>*/}
                    {/*<div className="item" ><i className="sa flag"/>Saudi Arabia</div>*/}
                    {/*<div className="item" ><i className="sn flag"/>Senegal</div>*/}
                    {/*<div className="item" ><i className="cs flag"/>Serbia</div>*/}
                    {/*<div className="item" ><i className="rs flag"/>Serbia</div>*/}
                    {/*<div className="item" ><i className="sc flag"/>Seychelles</div>*/}
                    {/*<div className="item" ><i className="sl flag"/>Sierra Leone</div>*/}
                    {/*<div className="item" ><i className="sg flag"/>Singapore</div>*/}
                    {/*<div className="item" ><i className="sk flag"/>Slovakia</div>*/}
                    {/*<div className="item" ><i className="si flag"/>Slovenia</div>*/}
                    {/*<div className="item" ><i className="sb flag"/>Solomon Islands</div>*/}
                    {/*<div className="item" ><i className="so flag"/>Somalia</div>*/}
                    {/*<div className="item" ><i className="za flag"/>South Africa</div>*/}
                    {/*<div className="item" ><i className="kr flag"/>South Korea</div>*/}
                    {/*<div className="item" ><i className="es flag"/>Spain</div>*/}
                    {/*<div className="item" ><i className="lk flag"/>Sri Lanka</div>*/}
                    {/*<div className="item" ><i className="sd flag"/>Sudan</div>*/}
                    {/*<div className="item" ><i className="sr flag"/>Suriname</div>*/}
                    {/*<div className="item" ><i className="sj flag"/>Svalbard</div>*/}
                    {/*<div className="item" ><i className="sz flag"/>Swaziland</div>*/}
                    {/*<div className="item" ><i className="se flag"/>Sweden</div>*/}
                    {/*<div className="item" ><i className="ch flag"/>Switzerland</div>*/}
                    {/*<div className="item" ><i className="sy flag"/>Syria</div>*/}
                    {/*<div className="item" ><i className="tw flag"/>Taiwan</div>*/}
                    {/*<div className="item" ><i className="tj flag"/>Tajikistan</div>*/}
                    {/*<div className="item" ><i className="tz flag"/>Tanzania</div>*/}
                    {/*<div className="item" ><i className="th flag"/>Thailand</div>*/}
                    {/*<div className="item" ><i className="tl flag"/>Timorleste</div>*/}
                    {/*<div className="item" ><i className="tg flag"/>Togo</div>*/}
                    {/*<div className="item" ><i className="tk flag"/>Tokelau</div>*/}
                    {/*<div className="item" ><i className="to flag"/>Tonga</div>*/}
                    {/*<div className="item" ><i className="tt flag"/>Trinidad</div>*/}
                    {/*<div className="item" ><i className="tn flag"/>Tunisia</div>*/}
                    {/*<div className="item" ><i className="tr flag"/>Turkey</div>*/}
                    {/*<div className="item" ><i className="tm flag"/>Turkmenistan</div>*/}
                    {/*<div className="item" ><i className="tv flag"/>Tuvalu</div>*/}
                    {/*<div className="item" ><i className="ug flag"/>Uganda</div>*/}
                    {/*<div className="item" ><i className="ua flag"/>Ukraine</div>*/}
                    {/*<div className="item" ><i className="ae flag"/>United Arab Emirates</div>*/}
                    {/*<div className="item" ><i className="us flag"/>United States</div>*/}
                    {/*<div className="item" ><i className="uy flag"/>Uruguay</div>*/}
                    {/*<div className="item" ><i className="um flag"/>Us Minor Islands</div>*/}
                    {/*<div className="item" ><i className="vi flag"/>Us Virgin Islands</div>*/}
                    {/*<div className="item" ><i className="uz flag"/>Uzbekistan</div>*/}
                    {/*<div className="item" ><i className="vu flag"/>Vanuatu</div>*/}
                    {/*<div className="item" ><i className="va flag"/>Vatican City</div>*/}
                    {/*<div className="item" ><i className="ve flag"/>Venezuela</div>*/}
                    {/*<div className="item" ><i className="vn flag"/>Vietnam</div>*/}
                    {/*<div className="item" ><i className="wf flag"/>Wallis and Futuna</div>*/}
                    {/*<div className="item" ><i className="eh flag"/>Western Sahara</div>*/}
                    {/*<div className="item" ><i className="ye flag"/>Yemen</div>*/}
                    {/*<div className="item" ><i className="zm flag"/>Zambia</div>*/}
                    {/*<div className="item" ><i className="zw flag"/>Zimbabwe</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*/!*</div>*!/*/}


                </div>
                <div className="ui button" tabIndex="0">Confirm Address</div>
            </form>

        </div>
    }
}

